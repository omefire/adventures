package omefire;

/**
 * Created by omefire on 6/7/15.
 */
public class Graph {

    private int[][] vertices;

    public Graph(int[][] vertices){
        this.vertices = vertices;
    }

    public int[][] getVertices(){
        return this.vertices;
    }

    public int getMaxFlow(){
        return new FordFulkerson(this, 0, 5).getMaxFlow();
    }
}
