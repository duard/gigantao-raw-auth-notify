import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgftkcavrEntity } from './tGFTKCAVR.entity';

@Index('PK_TGFTKCFVR', ['codcfg'], { unique: true })
@Entity('TGFTKCFVR', { schema: 'SANKHYA' })
export class TgftkcfvrEntity {
  @Column('smallint', { primary: true, name: 'CODCFG' })
  codcfg: number;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('datetime', { name: 'DHULTEXEC', nullable: true })
  dhultexec: Date | null;

  @OneToMany(
    () => TgftkcavrEntity,
    (tgftkcavrEntity) => tgftkcavrEntity.codcfg2,
  )
  tgftkcavrs: TgftkcavrEntity[];
}
