'use client'

import { Avatar , AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"

export interface ChatProps {}

function Chat({}: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <div>
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full space-y-4 pr-4 pb-4">
            {messages.map((message) => 
              <div key={message.id} className="flex gap-4 text-slate-600 text-sm">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>LS</AvatarFallback>
                    <AvatarImage src="https://github.com/luiggisales.png"/>
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png"/>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'Usuário' : 'AI'}
                  </span>
                  {message.content}
                </p>
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
            <Input placeholder="Como posso ajudar?" value={input} onChange={handleInputChange}/>
            <Button type="submit" className="bg-slate-900 rounded-lg text-white hover:text-slate-900 hover:bg-slate-200 ">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Chat
