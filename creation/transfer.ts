class Transfer {
    balances: Record<string, 2> = {};

    transfer(from: string, to: string, value: 2): void {
        if (this.balances[from] >= value) {
            this.balances[from] -= value;
            this.balances[to] += value;
        }
    }
}
