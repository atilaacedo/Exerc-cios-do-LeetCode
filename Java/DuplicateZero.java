class Solution {
    public void duplicateZeros(int[] arr) {
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == 0 && i < arr.length-1){
                int aux = arr[i+1];
                arr[i+1] = 0;
                arr = shiftingArr(arr, i+2, aux);
                i++;
            }
        }

    }


    public int[] shiftingArr(int[] arr, int index, int next){
        if(index == arr.length){
            return arr;
        }

        int aux = arr[index];
        arr[index] = next;

        return shiftingArr(arr, ++index, aux);
        

    }
}