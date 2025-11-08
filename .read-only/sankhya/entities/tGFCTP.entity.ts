import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';

@Index('PK_TGFCTP', ['nuimp', 'pagina', 'sequencia'], { unique: true })
@Entity('TGFCTP', { schema: 'SANKHYA' })
export class TgfctpEntity {
  @Column('int', { primary: true, name: 'NUIMP', default: () => '(0)' })
  nuimp: number;

  @Column('int', { primary: true, name: 'PAGINA', default: () => '(0)' })
  pagina: number;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfctps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfctps)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfctps)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal: TgflocEntity;
}
