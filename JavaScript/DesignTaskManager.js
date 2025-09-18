
let mapTasksPriority = new Map();
/**
 * @param {number[][]} tasks
 */
var TaskManager = function(tasks) {
    mapTasksPriority = new Map();
    for(const task of tasks){
        mapTasksPriority.set(task[1], [task[0], task[2]]);
    }
};

/** 
 * @param {number} userId 
 * @param {number} taskId 
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function(userId, taskId, priority) {
    if(!mapTasksPriority.has(taskId)){
        mapTasksPriority.set(taskId, [userId, priority]);
    }
};

/** 
 * @param {number} taskId 
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function(taskId, newPriority) {
    const task = mapTasksPriority.get(taskId);
    if(task){
        task[1] = newPriority;
        mapTasksPriority.set(taskId, task);
    }
};

/** 
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function(taskId) {
    const task = mapTasksPriority.get(taskId);
    if(task){
        mapTasksPriority.delete(taskId);
    }
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function() {
    if(mapTasksPriority.size === 0) return -1;
   
    let topTaskId = -1, topPriority = -1, topUserId = -1;
    for(const [taskId, [userId, priority]] of mapTasksPriority.entries()){
        if(priority > topPriority || (priority === topPriority && taskId > topTaskId)){
            topPriority = priority;
            topUserId = userId;
            topTaskId = taskId;
        }
    }
    mapTasksPriority.delete(topTaskId);
    return topUserId;
};

/** 
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */