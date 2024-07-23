package elecciones.elecciones.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
                http
                                .authorizeRequests()
                                .antMatchers("/css/**", "/img/**", "/js/**", "/", "/main").permitAll() // Permitir
                                                                                                       // acceso a
                                                                                                       // recursos
                                                                                                       // estáticos y
                                                                                                       // las páginas
                                                                                                       // index y main
                                .anyRequest().authenticated() // Requiere autenticación para otras URL
                                .and()
                                .formLogin()
                                .loginPage("/login")
                                .permitAll()
                                .and()
                                .logout()
                                .permitAll();
        }
}
