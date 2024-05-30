import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
/*     loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo */
}) {
    return (
        <>
    
          <TodoCounter 
            completed={completedTodos} 
            total={totalTodos} 
          />
    
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length < 1) && <EmptyTodos/>}

            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        
          <CreateTodoButton/>
        </>
      );
}

export {AppUI};