#include <stdio.h>
/**
 * main - Entry
 * Return: Always 0 (Success)
 */
int main (){
int X ;
int *P1;
P1 =&X;

printf("enter the value of X : \n");
scanf("%d",P1);

if (*P1 % 2 == 0){
printf("%d est paire \n", *P1);
}else {
printf("%d est impair \n", *P1);
}
return 0;
}
