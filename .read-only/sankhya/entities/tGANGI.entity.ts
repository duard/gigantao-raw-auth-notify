import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgatrcEntity } from './tGATRC.entity';
import { TgangrEntity } from './tGANGR.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGANGI', ['codngr', 'nunota', 'tipmov', 'seqite'], { unique: true })
@Index('TGANGI_I01', ['nunota'], {})
@Entity('TGANGI', { schema: 'SANKHYA' })
export class TgangiEntity {
  @Column('int', { primary: true, name: 'CODNGR' })
  codngr: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('char', { primary: true, name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('int', { primary: true, name: 'SEQITE', default: () => '(0)' })
  seqite: number;

  @Column('int', { name: 'NUTRANSFCAB', default: () => '(0)' })
  nutransfcab: number;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('float', { name: 'NEGOCIADO', nullable: true, precision: 53 })
  negociado: number | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('float', { name: 'QTDNEGOC', nullable: true, precision: 53 })
  qtdnegoc: number | null;

  @Column('float', { name: 'VLRUNITSEMICMS', nullable: true, precision: 53 })
  vlrunitsemicms: number | null;

  @ManyToOne(() => TgatrcEntity, (tgatrcEntity) => tgatrcEntity.tgangis)
  @JoinColumn([{ name: 'NUTRANSF', referencedColumnName: 'nutransf' }])
  nutransf: TgatrcEntity;

  @ManyToOne(() => TgangrEntity, (tgangrEntity) => tgangrEntity.tgangis)
  @JoinColumn([{ name: 'CODNGR', referencedColumnName: 'codngr' }])
  codngr2: TgangrEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgangis)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
