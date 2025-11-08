import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcacurEntity } from './tCACUR.entity';

@Index('PK_TCATEN', ['codtpens'], { unique: true })
@Entity('TCATEN', { schema: 'SANKHYA' })
export class TcatenEntity {
  @Column('smallint', { primary: true, name: 'CODTPENS' })
  codtpens: number;

  @Column('char', { name: 'NOME', nullable: true, length: 50 })
  nome: string | null;

  @OneToMany(() => TcacurEntity, (tcacurEntity) => tcacurEntity.codtpens)
  tcacurs: TcacurEntity[];
}
