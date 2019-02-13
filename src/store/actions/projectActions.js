export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            author_first_name: "Damodar",
            author_last_name: "Lohani",
            author_id: "1234",
            created_at: new Date()
        }).then(()=>{
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch(e=>{
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error: e
            });
        })
    }
}