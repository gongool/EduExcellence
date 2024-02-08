

const Categories = ({ icon, category }) => {
    return (
        <div className='flex items-center flex-col gap-2 bg-white p-4 rounded-md w-60 mx-auto' >
            <div className='text-Teal text-tx1'>{icon}</div>
            <div className='text-sm'>{category}</div>
            <a href="#" className='text-xs text-gray'>View More</a>
        </div>
    );
};

export default Categories;
