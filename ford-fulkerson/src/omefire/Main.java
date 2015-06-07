package omefire;

public class Main {

    public static void main(String[] args) {

	    // create and initiate a graph
        // vertices[0][1] = 16 means that the capacity of the edge connecting vertex 0 and vertex 1 is 16
        int[][] vertices =
        {
                {0, 16, 13, 0, 0, 0},
                {0, 0, 10, 12, 0, 0},
                {0, 4, 0,  0,  14, 0},
                {0, 0, 9,  0,  0,  20},
                {0, 0, 0,  7,  0,  4},
                {0, 0, 0,  0,  0,  0}
        };
        Graph g = new Graph(vertices);

        System.out.println(g.getMaxFlow());
    }
}
