class Solution {
    public int earliestFinishTime(int[] landStartTime, int[] landDuration, int[] waterStartTime, int[] waterDuration) {

        int earliestFinishTime = Integer.MAX_VALUE;

        for (int i = 0; i < landStartTime.length; i++) {
            for (int j = 0; j < waterStartTime.length; j++) {
                int landFinishTime = landStartTime[i] + landDuration[i];
                int landWater = Math.max(waterStartTime[j], landFinishTime) + waterDuration[j];
                earliestFinishTime = Math.min(earliestFinishTime, landWater);

                int waterFinishTime = waterStartTime[j] + waterDuration[j];
                int waterLand = Math.max(landStartTime[i], waterFinishTime) + landDuration[i];
                earliestFinishTime = Math.min(earliestFinishTime, waterLand);

            }
        }

        return earliestFinishTime;
    }
}