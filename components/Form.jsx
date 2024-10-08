import Link from "next/link";


const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the World, and let your Imaginationrun wild with any AI-powered Platform.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-white">
            Your AI Prompt
          </span>
          <textarea 
            name="" 
            id="" 
            value={post.prompt} 
            onChange={(e)=>setPost({...post,prompt:e.target.value})}
            placeholder="Write your Prompt here ..."
            required
            className="form_textarea">
          </textarea>
        </label>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-white">
            Tag <span className="font-normal">(#product,#webdev,#machinelearning,#fashion,#receipe)</span>
          </span>
          <input 
            value={post.tag} 
            onChange={(e)=>setPost({...post,tag:e.target.value})}
            placeholder="#tag"
            required
            className="form_input">
          </input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">Cancel</Link>
          <button 
            type="submit" 
            disabled={submitting}
            className="px-5 py-1.5 text-sm rounded-full text-white bg-blue-600">
            {submitting ? `${type}...`:type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form