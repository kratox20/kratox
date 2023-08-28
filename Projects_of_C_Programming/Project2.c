#include <stdio.h>
/**
 * main - Entry
 * Return: Always 0 (Success)
 */
int main(){
float X , Y;
int S;
float *P1;
float *P2;
P1 = &X;
P2 = &Y;

printf("enter the value of X : \n");
scanf("%f",P1);
printf("enter the value of Y : \n");
scanf("%f",P2);

printf("X + Y = %.2f\n", *P1 + *P2);
printf("X - Y = %.2f\n", *P1 - *P2);
printf("X * Y = %.2f \n", *P1 * *P2);

if (*P2 != 0){
printf("X / Y = %.2f \n", *P1 / *P2);
}else{
printf("impossible\n");
}
return 0;
}
