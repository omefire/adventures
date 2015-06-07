package omefire;

import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * Created by omefire on 6/7/15.
 */
public class FordFulkerson {

    private Graph graph;
    private int source;
    private int sink;

    // used by doesPathExist method to hold the path from source to sink node when such a path does exist
    private int[] parent;

    public FordFulkerson(Graph g, int source, int sink){
        this.graph = g;
        this.source = source;
        this.sink = sink;
        this.parent = new int[g.getVertices().length];
    }

    public int getMaxFlow(){

        int flow = 0;

        // create a residual graph
        Graph residualGraph = new Graph(graph.getVertices());

        // what if no path exists between source and sink ?

        while(doesPathExist(residualGraph, this.source, this.sink)){

            // get the edge with the minimum residual flow
            int minResidualFlow = Integer.MAX_VALUE;
            int currentNode = parent[sink];
            int nextNodeToCurrent = sink;
            while(currentNode != -1){ // what if path contains only one node ? source = sink ? or if path empty ?
                minResidualFlow = Math.min(minResidualFlow, residualGraph.getVertices()[currentNode][nextNodeToCurrent]);
                nextNodeToCurrent = currentNode;
                currentNode = parent[currentNode];
            }

            // Now that the augmenting path has been found as well as the amount of flow that can through it,
            // ... actually push the flow through it
            currentNode = parent[sink];
            nextNodeToCurrent = sink;
            while(currentNode != -1){ // what if path contains only one node ? source = sink ? or if path empty ?
                residualGraph.getVertices()[currentNode][nextNodeToCurrent] = residualGraph.getVertices()[currentNode][nextNodeToCurrent] - minResidualFlow;
                residualGraph.getVertices()[nextNodeToCurrent][currentNode] = residualGraph.getVertices()[currentNode][nextNodeToCurrent] + minResidualFlow;
            }

            flow += minResidualFlow;
        }

        return flow;
    }

    // BFS
    // Checks if a path exists between the source and the sink node
    // it also populates the parent array if such a path exists
    // TODO: stop this method from manipulating the global 'parent' array directly, make it return the 'parent' array in addition to the boolean value. It'd be cleaner.
    private boolean doesPathExist(Graph graph, int source, int sink){

        // reinitialize parent array
        parent = new int[graph.getVertices().length];

        boolean visited[] = new boolean[graph.getVertices().length];
        Arrays.fill(visited, false);

        Queue<Integer> queue = new LinkedBlockingQueue<>();
        queue.add(source);
        visited[source] = true;

        while(!queue.isEmpty()) {
            int u = queue.remove();

            // get all neighbors of u
            for(int v = 0; v < graph.getVertices().length; v++){
                if( !visited[v] && graph.getVertices()[u][v] > 0 ){
                    visited[u] = true;
                    queue.add(v);
                    parent[v] = u;
                }
            }
        }

        return visited[sink] == true;
    }
}
