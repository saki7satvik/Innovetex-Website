import React from 'react'

const Workshop = () => {
  return (
    <div class="container mx-auto p-10">
            <h2 class="orbitron text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">Technical Workshops</h2>
            <div class="grid md:grid-cols-2 gap-8">
               
                <div class="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/30">
                    <div class="text-xl mb-4 text-cyan-400">Web3 Development</div>
                    <p class="text-gray-300 mb-4">Learn blockchain development and create your first DApp</p>
                    <div class="flex items-center gap-4 mb-4">
                        <i class="bi bi-calendar text-fuchsia-400"></i>
                        <span>March 15, 2024</span>
                    </div>
                    <button class="w-full py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300">Join Workshop</button>
                </div>
                
                <div class="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-6 rounded-xl border border-cyan-500/30">
                    <div class="text-xl mb-4 text-cyan-400">AI/ML Workshop</div>
                    <p class="text-gray-300 mb-4">Deep dive into machine learning algorithms and neural networks</p>
                    <div class="flex items-center gap-4 mb-4">
                        <i class="bi bi-calendar text-fuchsia-400"></i>
                        <span>March 16, 2024</span>
                    </div>
                    <button class="w-full py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300">Join Workshop</button>
                </div>
            </div>
        </div>
  )
}

export default Workshop