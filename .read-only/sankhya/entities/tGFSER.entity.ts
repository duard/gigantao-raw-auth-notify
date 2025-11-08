import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFSER', ['nunota', 'sequencia', 'serie'], { unique: true })
@Index('TGFSER_I01', ['codprod'], {})
@Index('TGFSER_I02', ['codprod', 'serie', 'sequencia'], {})
@Index('TGFSER_I03', ['smartcard'], {})
@Index('TGFSER_I04', ['codprod', 'serie', 'nunota', 'sequencia'], {})
@Index('TGFSER_I05', ['serie'], {})
@Index('TGFSER_IFK', ['nunota', 'codprod', 'serie'], {})
@Index('TGFSER_IFK2', ['numcontrato'], {})
@Entity('TGFSER', { schema: 'SANKHYA' })
export class TgfserEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 60 })
  serie: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { name: 'ATUALESTOQUE', default: () => '(-1)' })
  atualestoque: number;

  @Column('char', { name: 'TIPCONTEST', length: 1, default: () => "'N'" })
  tipcontest: string;

  @Column('char', { name: 'INTEGSERCON', nullable: true, length: 1 })
  integsercon: string | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('datetime', { name: 'DTVEICULA', nullable: true })
  dtveicula: Date | null;

  @Column('varchar', { name: 'SMARTCARD', nullable: true, length: 60 })
  smartcard: string | null;

  @Column('varchar', { name: 'SERIEFAB', nullable: true, length: 60 })
  seriefab: string | null;

  @Column('char', { name: 'AVARIADO', nullable: true, length: 1 })
  avariado: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfsers)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
