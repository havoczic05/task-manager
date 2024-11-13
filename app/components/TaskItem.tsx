
import { Button } from "@/components/ui/button"
interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p>{task.description}</p>
      <div className="mt-2 space-x-2">
        <span className={`p-2 mb-4 text-sm text-white rounded-lg ${task.completed ? 'bg-green-500' : 'bg-red-500'}`}>
          {task.completed ? 'Completada' : 'Pendiente'}
        </span>
        <Button
          onClick={() => onEdit(task)}
        >
          Editar
        </Button>




        <Button
          onClick={() => onDelete(task.id)}>
          Eliminar
        </Button>





      </div>
    </div>
  );
};

export default TaskItem;
