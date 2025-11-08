import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiipqEntity } from './tSIIPQ.entity';

@Index('PK_TSIPSQ', ['codcfg'], { unique: true })
@Entity('TSIPSQ', { schema: 'SANKHYA' })
export class TsipsqEntity {
  @Column('bigint', { primary: true, name: 'CODCFG' })
  codcfg: string;

  @Column('varchar', { name: 'URI', nullable: true, length: 255 })
  uri: string | null;

  @Column('int', { name: 'PORTA', nullable: true })
  porta: number | null;

  @Column('varchar', { name: 'USUARIO', nullable: true, length: 10 })
  usuario: string | null;

  @Column('varchar', { name: 'SENHA', nullable: true, length: 32 })
  senha: string | null;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'CRON', nullable: true, length: 32 })
  cron: string | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @OneToMany(() => TsiipqEntity, (tsiipqEntity) => tsiipqEntity.codcfg)
  tsiipqs: TsiipqEntity[];
}
