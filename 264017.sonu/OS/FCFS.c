
#include <stdio.h>

int main() {
    int n;

    printf("Enter number of processes: ");
    scanf("%d", &n);

    int bt[n], ct[n], tat[n], wt[n];
    float total_wt = 0, total_tat = 0;


    printf("\nEnter Burst Time for each process:\n");
    for (int i = 0; i < n; i++) {
        printf("Process P%d: ", i + 1);
        scanf("%d", &bt[i]);
    }

    
    ct[0] = bt[0];
    for (int i = 1; i < n; i++) {
        ct[i] = ct[i - 1] + bt[i];
    }

    for (int i = 0; i < n; i++) {
        tat[i] = ct[i];       // TAT = CT - AT (since AT = 0, TAT = CT)
        wt[i] = tat[i] - bt[i]; 
        
        total_wt += wt[i];
        total_tat += tat[i];
    }

    printf("\nProcess\tBurst Time\tCompletion Time\tTurnaround Time\tWaiting Time\n");
    printf("----------------------------------------------------------------------\n");
    for (int i = 0; i < n; i++) {
        printf("P%d\t\t%d\t\t%d\t\t%d\t\t%d\n", i + 1, bt[i], ct[i], tat[i], wt[i]);
    }

    printf("\nAverage Waiting Time = %.2f\n", total_wt / n);
    printf("Average Turnaround Time = %.2f\n", total_tat / n);

    return 0;
}