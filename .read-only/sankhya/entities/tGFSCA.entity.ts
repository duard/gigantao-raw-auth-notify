import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfcatEntity } from './tGFCAT.entity';

@Index('PK_TGFSCA', ['codcat', 'sequencia'], { unique: true })
@Entity('TGFSCA', { schema: 'SANKHYA' })
export class TgfscaEntity {
  @Column('int', { primary: true, name: 'CODCAT' })
  codcat: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('datetime', { name: 'DTEXE', nullable: true })
  dtexe: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfscas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfcatEntity, (tgfcatEntity) => tgfcatEntity.tgfscas)
  @JoinColumn([{ name: 'CODCAT', referencedColumnName: 'codcat' }])
  codcat2: TgfcatEntity;
}
