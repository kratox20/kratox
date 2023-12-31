import java.util.Stack;

public class day1 {
    public static void main(String[] args) {
        // Creating a stack
        Stack<String> stack = new Stack<>();

        // Pushing elements onto the stack
        stack.push("minecraft");
        stack.push("maguire");
        stack.push("doritos");

        System.out.println(stack.peek());
        System.out.println(stack);


        // Pop an element from the stack
        /*int poppedElement = stack.pop();
        System.out.println("Popped element: " + poppedElement);*/

        // Peek at the top element without removing it
        /*int peekedElement = stack.peek();
        System.out.println("Top element (without removal): " + peekedElement);
        */
        // Check if the stack is empty
        /*boolean isEmpty = stack.isEmpty();
        System.out.println("Is the stack empty? " + isEmpty);*/
    }
}
