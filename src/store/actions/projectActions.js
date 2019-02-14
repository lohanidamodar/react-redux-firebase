
export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            author_first_name: profile.first_name,
            author_last_name: profile.last_name,
            author_id: authorId,
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