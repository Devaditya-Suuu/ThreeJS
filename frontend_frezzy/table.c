#include<stdio.h>
int main(){
    int n,i,j;
    printf("enter the number");
    scanf("%d",&n);
    for(i=1; i<=10; i++){
        for(j=1; j<=3; j++){
            printf("%dx%d=%d\n",n,i,n*i);
        }
    }
}