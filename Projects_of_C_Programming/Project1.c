#include <stdio.h>
/**
 * main - Entry
 * Return: Always 0 (success)
 */
int main(){
int T[10];
int min;
int *P;

P = T;
printf("enter the value of all elements in the table : \n");
for ( P = T ; P < T + 10 ; P++ ){
printf("T[%ld] = " , P-T);
scanf("%d",P);
}
min = *T;
for ( P = T + 1 ; P < T + 10 ; P++ ){
	if(min>*P)
		min = *P;
}
printf("the minimum is : %d \n", min);
return 0 ;
}
