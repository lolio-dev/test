import { describe, it, expect } from "vitest"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

import { mount } from "@vue/test-utils"
import HelloWorld from "@/components/HelloWorld.vue"
import Home from "@/views/Home.vue"

describe("HelloWorld", () => {
  const vuetify = createVuetify({ components, directives })

  it("renders properly", () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [vuetify],
      },
    })
    expect(wrapper.text()).toContain("lorem")
  })
})
