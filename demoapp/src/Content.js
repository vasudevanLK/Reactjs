
import ListItems from './ListItems'
  const Content = ({items,handleCheck,handleDelete}) => {
    

    return (
      <main className='main'>
        {items.length ?
        (
          <ListItems
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />):
          (
            <p style={{fontWeight:"100"}}>YOUR LIST IS EMPTY</p>
          )}

      </main>
    )
  }

export default Content