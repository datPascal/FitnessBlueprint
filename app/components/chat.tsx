import { useState, useEffect, useRef } from 'react';

export default function Chat({messages, sqlthroughai}) {
    const [userInput, setUserInput] = useState("");
    const [tempMessage, setTempMessage] = useState("");
    let messageEndRef = useRef(null);

    const [msg, setMsg] = useState("");
    const modalRef = useRef(null);

    useEffect(() => {
      setTempMessage("")
      setUserInput("")
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    function openModal(msg) {
      setMsg(msg); // Set the message state
      modalRef.current.showModal();
    }

    return(
      <div className="flex flex-col h-full p-4">
        <div className="overflow-auto mb-auto"> 
          {messages
            .filter((message) => message.role !== 'system')
            .map((message, index) => (
              <div key={"div" + index}>
              {message.role === 'user' &&
                <div key={index} className="chat chat-start">
                  <div className='chat-bubble'>{message.content}</div>
                </div>
              }
              {message.role === 'assistant' &&
                <div key={index} className="chat chat-end">
                  <div className="chat-image">
                    <div className="btn btn-square" onClick={() => {navigator.clipboard.writeText(message.content); alert('Message copied!');}}>
                        📋
                    </div>
                  </div>
                  <div className='chat-bubble'>
                    {message.content?.slice(0, 500)}
                    {message.content?.length > 500 && '...'}
                    {message.content?.length > 500 && 
                    <div className="btn m-4" onClick={() => openModal(message.content)}>show full Message</div>}
                    <dialog ref={modalRef} id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box max-w-5xl">
                          <p className="py-4">{msg}</p>
                          <p className="py-4">Press ESC key or click the button below to close</p>
                          <div className="modal-action">
                            <div className="btn" onClick={() => modalRef.current.close()}>Close</div>
                          </div>
                        </form>
                    </dialog>
                  </div>
              </div>
              }
              </div>
            ))}
            {tempMessage != "" && 
              <div className="chat chat-start">
                <div className='chat-bubble'>{tempMessage}</div>
              </div>
              
            }
            {tempMessage != "" && 
              <div className="chat chat-end">
                <div className='chat-bubble'>
                  <span className="loading loading-dots loading-lg"></span>
                </div>
              </div>
            }
            <div ref={messageEndRef} />
          </div>
        <div>
          <label className='label'>
              <div className='divider mt-0 mb-0'></div>
          </label>
            <div className='form-control'>
              <label className='label'>
                {sqlthroughai == true && 
                  <select id="sqlType" name="sqlType" className="select select-bordered">
                    <option>PostgreSQL</option>
                    <option>SQL</option>
                    <option>MySQL</option>
                    <option>SQLite</option>
                    <option>Oracle PL</option>
                    <option>Microsoft T-SQL</option>
                    <option>IBM DB2</option>
                    <option>Apache HiveQL</option>
                    <option>Google BigQuery</option>
                    <option>MariaDB</option>
                    <option>Amazon Redshift</option>
                    <option>SAP HANA</option>
                    <option>InterBase/Firebird</option>
                  </select>
                }
                <input
                  id="content" 
                  name="content"
                  type='text'
                  placeholder='Type your message…'
                  value={userInput}
                  onChange={(event) => setUserInput(event.target.value)}
                  className='input input-bordered w-full'
                />
                <input type="hidden" name="messages" value={JSON.stringify(messages)} />
                <button name="_action" value="ChatSend" type="submit" className='btn btn-square' onClick={() => {setTempMessage(userInput);}}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 9l3 3m0 0l-3 3m3-3H3'
                    />
                  </svg>
                </button>
              </label>
            </div>
        </div>
      </div>
    );
}