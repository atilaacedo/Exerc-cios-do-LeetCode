import java.util.Map;
import java.util.TreeMap;

class Solution {
    public int countDays(int days, int[][] meetings) {
        
        int daysWithoutMeeting = 0;
        int firstDay = days;
        Map<Integer, Integer> daysWorking = new TreeMap<>();

        for(int i = 0; i < meetings.length; i++){

            int initDay = meetings[i][0];
            int lastDay = meetings[i][1];

            firstDay = Math.min(initDay, firstDay);

            daysWorking.put(initDay, daysWorking.getOrDefault(initDay, 0) + 1);
            daysWorking.put(lastDay + 1, daysWorking.getOrDefault(lastDay + 1, 0) - 1);
            
        }

       


        daysWithoutMeeting += (firstDay-1);

        int i = 0;
        for(Map.Entry<Integer, Integer> day : daysWorking.entrySet()){
            int currentDay = day.getKey();


            if(i == 0){
                daysWithoutMeeting += (currentDay - firstDay);
            }


            i += day.getValue();
            firstDay = currentDay;
        }


        daysWithoutMeeting += days - firstDay + 1;
        return daysWithoutMeeting ;
    }
}