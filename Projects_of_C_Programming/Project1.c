#include <stdio.h>
/**
 * main - Entry
 * Return: Always 0 (success)
 */
int main(){
int T[6];
int *P;

P = T;
printf("enter the value of all elements in the table : \n");
for ( P = T ; P < T + 6 ; P++ ){
printf("T[%ld] = " , P-T);
scanf("%d",P);
}
}
