const { GENESIS_DATA } = require("../config/config");
const cryptoHash = require('../crypto/crypto-hash');


class Block{
    constructor({timestamp, lastHash, hash, data}){ //{agruments in this do not nessary to be in order it }
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
        this.timestamp = timestamp;
    }


    static genesis() {
        return new this(GENESIS_DATA);
    } 


    static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        
        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp, lastHash, data)
        });
    }
}

module.exports = Block;

