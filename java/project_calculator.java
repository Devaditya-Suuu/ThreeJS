import java.util.Scanner;

public class project_calculator {
    public static void main(String[] args) {
        
            Scanner scn = new Scanner(System.in);
            System.out.println("enter 1,2,3,4 for add,sub,mul,div respectively");
            
            int n=scn.nextInt();
            System.out.println("enter two number");
            int a=scn.nextInt();
            int b=scn.nextInt();
            int sum,sub,mul,div;
            if(n==1)
            {
                sum=a+b;
                System.out.println("sum is "+ sum);
            }
            if(n==2)
            {
                sub=a-b;
                System.out.println("sub is "+ sub);
            }
            if(n==3)
            {
                mul=a*b;
                System.out.println("mul is "+ mul);
            }
            if(n==4)
            {
                div=a/b;
                System.out.println("div is "+ div);
            }
        }
    }