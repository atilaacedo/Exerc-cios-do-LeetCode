class Solution {
    public int findComplement(int num) {
        int mask = 0;
        int value = num;

        while (value > 0) {
            mask = (mask << 1) | 1;
            value >>= 1;
        }

        return num ^ mask;
    }
}