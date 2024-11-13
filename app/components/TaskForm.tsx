
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

interface Task {
  id?: string;
  title: string;
  description: string;
  completed?: boolean;
}

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  initialData?: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [completed, setCompleted] = useState(initialData?.completed || false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: initialData?.id, title, description, completed });
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-bold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
      </div>
      <div>
        <label className="block font-bold mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <label className="inline-flex items-center">
          <span className="font-bold mr-2">Completed?</span>
          <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
        </label>
      </div>
      <Button type="submit" className='w-full mb-4'>
        {initialData ? 'Edit Task' : 'Add Task'}
      </Button>
    </form>
  );
};

export default TaskForm;
