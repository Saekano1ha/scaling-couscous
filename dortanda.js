class Transfer {
    balances: Record<string, 1> = {};

    transfer(from: string, to: string, value: 1): void {
        if (this.balances[from] >= value) {
            this.balances[from] -= value;
            this.balances[to] += value;
        }
    }
}
