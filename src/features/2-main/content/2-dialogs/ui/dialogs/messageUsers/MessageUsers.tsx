import React, {useEffect, useRef} from 'react';
import s from "features/2-main/content/2-dialogs/ui/dialogs/messageUsers/MessageUsers.module.css";
import {MessageUsersType} from "features/2-main/content/2-dialogs/ui/dialogs/messageUsers/MessageUsersContainer";
import {FormTextarea} from "common/components/formTextArea/FormTextArea";

export const MessageUsers = (props: MessageUsersType) => {

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const scrollToBot = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
      }

      scrollToBot()
    }, [props.usersMessages]);

    return (
      <div className={s.container}>
        <div className={`${s.dialogs__messages} customScroll`}>

          {props.usersMessages.map(uM => <div key={uM.id} className={s.dialogs__users}>
                <div>{uM.sms}</div>
              </div>
          )}

          <div ref={messagesEndRef}/>
        </div>
        <FormTextarea messages={props.usersMessages} addMessages={props.addMessageUsers} nameBut={'Send'}/>
      </div>
    );
  };


