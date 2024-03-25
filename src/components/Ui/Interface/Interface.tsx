import { useState, FormEvent, ChangeEvent } from 'react';
import ImageInput from '../ImageInput/ImageInput';
import Response from '../Response/Response';
import axios from 'axios';

function Interface() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (imageFile) {
      // Handle image submission
      try {
        const formData = new FormData();
        formData.append('user_image', imageFile);

        const res = await axios.post('/api/v1/g/generate-vision', formData);
        setResponse(res.data.response);
      } catch (error) {
        console.error('Error generating images:', error);
      }
    } else {
      // Handle text submission
      try {
        const res = await axios.post('/api/v1/g/generate-text', { prompt });
        setResponse(res.data.text);
      } catch (error) {
        console.error('Error generating text:', error);
      }
    }
    setLoading(false);
  };

  // Handle image input changes
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
  };

  return (
    <div className='container'>
      <div id="response" className="px-4 py-2">
        <Response response={response} loading={loading} />
      </div>
      <div className="container2 fixed bottom-0 left-0 w-full bg-zinc-800 border-t border-gray-600 p-4 rounded-t-lg">
        <form className="flex flex-row gap-3" onSubmit={handleSubmit}>
          <div className="relative flex-1">
            <div className="flex w-full items-center">
              <div className={`overflow-hidden ${(!prompt && !imageFile) ? 'border-token-border-xheavy shadow-[0_2px_6px_rgba(0,0,0,.05)]' : ''} flex flex-col w-full flex-grow relative border dark:text-white rounded-2xl bg-token-main-surface-primary border-token-border-medium`}>
                <textarea
                  id="prompt-textarea"
                  tabIndex={0}
                  rows={1}
                  placeholder="Message ChaeMINI…"
                  className="w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  spellCheck={false}
                />
                <button
                  id="send-button"
                  type="submit"
                  title='Send'
                  disabled={!prompt && !imageFile}
                  className={`absolute bottom-1.5 right-2 rounded-lg border p-0.5 text-white enabled:bg-white disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white md:bottom-3 md:right-3 justify-center items-center`}
                  data-testid="send-button"
                >
                  <span data-state="closed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black">
                      <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <ImageInput handleImageChange={handleImageChange} />
        </form>
        <div className="relative top-2 flex justify-center items-center text-center text-xs text-gray-400">
          ChaeMINI can make mistakes. Consider checking important information.
        </div>
      </div>
    </div>
  );
}

export default Interface;
