import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFEFDCERR', ['codemp', 'dtref', 'registro'], { unique: true })
@Entity('TGFEFDCERR', { schema: 'SANKHYA' })
export class TgfefdcerrEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('datetime', { name: 'DT_INI' })
  dtIni: Date;

  @Column('datetime', { name: 'DT_FIN' })
  dtFin: Date;

  @Column('varchar', { primary: true, name: 'REGISTRO', length: 4 })
  registro: string;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfefdcerrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
