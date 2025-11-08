import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgftokcamEntity } from './tGFTOKCAM.entity';

@Index('PK_TGFTOKCFG', ['codcfg'], { unique: true })
@Entity('TGFTOKCFG', { schema: 'SANKHYA' })
export class TgftokcfgEntity {
  @Column('smallint', { primary: true, name: 'CODCFG' })
  codcfg: number;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('datetime', { name: 'DHULTEXEC', nullable: true })
  dhultexec: Date | null;

  @OneToMany(
    () => TgftokcamEntity,
    (tgftokcamEntity) => tgftokcamEntity.codcfg2,
  )
  tgftokcams: TgftokcamEntity[];
}
