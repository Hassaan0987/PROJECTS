#include<iostream>
#include<string>
using namespace std;
int starline();
int main()

{
 int a,m,n,l,i;
 int d=0;
 int ar=1;
   char ch='y';
   char ope;
 char s[50][50];
char f[50][50];
string H[100];
string Z[100];
int r[50],E[50],S[50],F[50],M[50],P[50],G[50];   
 TOP:
 	for(int z=0;z=10;z++)
 	{
 		cout<<"ENTER DEPARTMENT : ";
 		cin>>Z[z];
 		
	cout<<"ENTER STUDENTS STRENGTH : ";
  cin>>n;
      
cout<<"ENTER PER ROOM LIMIT : ";
  cin>>l;
       
	 
      cout<<"ENTER REQUIRED INFORMATION FOR :"<<endl;
		for(int c=1;c<=n;c++)
		{
			cout<<"        ROLL# : "<<c<<endl;
		    cout<<" STUDENT NAME : ";
		    cin>>s[c];
		    cout<<"FATHER's NAME : ";
		    cin>>f[c];
		}
		cout<<endl<<endl;
		for(int v=1;v<=n;v++)
		{

		    cout<<"Enter marks of <{[ "<<s[v]<<" ]} of each SUBJECT BETWEEN (1 To 100) : "<<endl;
		    cout<<"   FOUNDATION OF ENGLISH = ";
		    cin>>E[v];
		    if(E[v]>100)
		    {
		    cout<<"ERROR !!!! YOU ENTERED AN INVALID DATA !!!!!"<<endl;
		    cout<<"PLEASE ENTER MARKS BETWEEN {1 TO 100} : ";
		    cin>>E[v];
		    }
		    cout<<"       BASIC MATHEMATICS = ";
		    cin>>M[v];
		     if(M[v]>100)
		     {
		    cout<<"ERROR !!!! YOU ENTERED AN INVALID DATA !!!!!"<<endl;
		    cout<<"PLEASE ENTER MARKS BETWEEN {1 TO 100} : ";
		    cin>>M[v];
		    }
		    cout<<"       BASIC ELECTRONICS = ";
		    cin>>P[v];
		     if(P[v]>100)
		     {
		    cout<<"ERROR !!!! YOU ENTERED AN INVALID DATA !!!!!"<<endl;
		    cout<<"PLEASE ENTER MARKS BETWEEN {1 TO 100} : ";
		    cin>>P[v];
		    }
		    cout<<"             PAK STUDIES = ";
		    cin>>S[v];
		      if(S[v]>100)
		     {
		    cout<<"ERROR !!!! YOU ENTERED AN INVALID DATA !!!!!"<<endl;
		    cout<<"PLEASE ENTER MARKS BETWEEN {1 TO 100} : ";
		    cin>>S[v];
		    }
		    cout<<"PROGRAMMING FUNDAMENTALS = ";
		    cin>>F[v];
		      if(F[v]>100)
		     {
		    cout<<"ERROR !!!! YOU ENTERED AN INVALID DATA !!!!!"<<endl;
		    cout<<"PLEASE ENTER MARKS BETWEEN {1 TO 100} : ";
		    cin>>F[v];
		    }
		    
	G[v]=(E[v]+M[v]+P[v]+S[v]+F[v])/5;
	
	 if(G[v]>=85 && G[v]<=100)
        H[v]="4.00________A__________(PASS)" ;   
    else if(G[v]>=80 && G[v]<=84)
        H[v]="3.70________A-_________(PASS)" ;
    else if(G[v]>=75 && G[v]<=79)
        H[v]="3.30________B+_________(PASS)" ;
    else if(G[v]>=70 && G[v]<=74)
        H[v]="3.00________B__________(PASS)" ;
    else if(G[v]>=65 && G[v]<=69)
        H[v]="2.70________B-_________(PASS)" ;
    else if(G[v]>=61 && G[v]<=64)
        H[v]="2.30________C+_________(PASS)" ;
   else if(G[v]>=58 && G[v]<60)
        H[v]="2.00________C__________(PASS)" ;
   else if(G[v]>=55 && G[v]<=57)
        H[v]="1.70________C-_________(PASS)" ;
   else if(G[v]>=50 && G[v]<54)
        H[v]="1.00________D__________(PASS)" ;
    else
        H[v]="0.00________F__________(FAIL)" ;
    cout<<endl<<endl;
}   
   for(int x=1;x<=n;x++)
 		{
 			Z[x]=Z[z];
		 }       
    
		
       if((n%l)==0)
       {
	    m=n/l;
	   }
	   	else
	{
	a=n; 
	for(i=1;i<=100;i++)
	{
		a++;
		if((a%l)==0)
		{
		break;
	    }
	}
	m=(n/l)+i;
    }
	
	for(int j=0;j<m;j++)
	{
	  for(int k=1;k<=l;k++)
	  {
	  	d++;
	  	r[d]=ar;
	  }
	  ar++;
		
	}
		 starline();
		 cout<<endl;
	cout<<"roll#"<<"\t"<<"Name"<<"\t"<<"   Father Name   "<<"\t"<<"rooms assigned"<<"\t\t"<<"DEPARTMENT"<<"\t"<<"GPA_______GRADE_______REMARKS"<<endl<<endl;
		 

		for(int p=1;p<=n;p++)
	{
	
	cout<<  p    <<"\t"<<s[p]  <<"\t\t "<<       f[p]        <<"\t\t    "<<   r[p]   <<"   \t\t  "<< Z[p]<<"\t\t"<<H[p]    <<endl<<endl;
   }
   starline();
cout<<"\n Do Another(Y/N)\n";
cin>>ch;
if(ch=='y' || ch=='Y')
goto TOP;
	return 0;
}
}
int starline()
{

	int count;
	for(count=0;count<=167;count++)	
	
{
		cout<<"*";
}
	
}

