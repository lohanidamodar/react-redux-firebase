const initState = {
    projects: [
        {id: 1, title: 'Help me find this', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore autem at architecto? Architecto cupiditate, animi sunt consectetur sequi quibusdam deleniti quod labore tenetur neque placeat eum illum minus sit!'  },
        {id: 2, title: 'Create final', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore autem at architecto? Architecto cupiditate, animi sunt consectetur sequi quibusdam deleniti quod labore tenetur neque placeat eum illum minus sit!'  },
        {id: 3, title: 'Organize that', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque labore autem at architecto? Architecto cupiditate, animi sunt consectetur sequi quibusdam deleniti quod labore tenetur neque placeat eum illum minus sit!'  },
    ]
}

const projectReducer = (state = initState,action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            let projects = state.projects.concat([{...action.project, id: 4}]);
            console.log(action.project);
            return {...state, projects: projects}
            break;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.error);
            break;
        default:
            break;
    }
    return state;
}

export default projectReducer;