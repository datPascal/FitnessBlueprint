export default function HEADLINE({h1, p}) {

    return(
        <div>
            <div className="container grid items-center pb-6 pt-6 ">
                <div className="flex max-w-[980px] flex-col items-start gap-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl __variable_b0a776">{h1}</h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">{p}</p>
                </div>
            </div>
        </div>
    );
}
