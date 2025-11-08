import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfvoaEntity } from './tGFVOA.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGFVOAH', ['codprod', 'codvol', 'controle', 'sequencia'], {
  unique: true,
})
@Index('TGFVOAH_I01', ['codbarra'], { unique: true })
@Entity('TGFVOAH', { schema: 'SANKHYA' })
export class TgfvoahEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 30,
    default: () => "' '",
  })
  controle: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('float', { name: 'QUANTIDADE', nullable: true, precision: 53 })
  quantidade: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfvoahs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfvoaEntity, (tgfvoaEntity) => tgfvoaEntity.tgfvoahs)
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'CODVOL', referencedColumnName: 'codvol' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
  ])
  tgfvoa: TgfvoaEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfvoahs)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;
}
