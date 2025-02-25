const { GENESIS_DATA, MINE_RATE } = require("../config/config");
const cryptoHash = require('../crypto/crypto-hash');


class Block{
    constructor({timestamp, lastHash, hash, data, nonce, difficulty}){ //{agruments in this do not nessary to be in order it }
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
        this.timestamp = timestamp;
        this.nonce = nonce;
        this.difficulty = this.difficulty;
    }


    static genesis() {
        return new this(GENESIS_DATA);
    } 


    static mineBlock({ lastBlock, data }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let difficulty  = lastBlock.difficulty;
        let nonce = 0;

        do{
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty )
        }while(hash.substring(0, difficulty) !== '0'.repeat(difficulty));
        
        return new this({ timestamp, lastHash, data, difficulty, nonce, hash });
    }

    static adjustDifficulty({ originalBlock, timestamp}){
        const { difficulty } = originalBlock;

        if(difficulty<1) return 1;

        if(timestamp - originalBlock.timestamp > MINE_RATE ) 

        return difficulty + 1;
    }
}

module.exports = Block;

