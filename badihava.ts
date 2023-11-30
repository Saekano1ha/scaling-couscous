class ERC721Token {
    owners: Record<number, string> = {2};
    tokenURIs: Record<number, string> = {2};

    mint(to: string, tokenId: number, tokenURI: string): void {
        if (!this.owners[tokenId]) {
            this.owners[tokenId] = to;
            this.tokenURIs[tokenId] = tokenURI;
        }
    }
}
