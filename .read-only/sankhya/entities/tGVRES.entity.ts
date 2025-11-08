import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgvpergEntity } from './tGVPERG.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGVRES', ['nures'], { unique: true })
@Entity('TGVRES', { schema: 'SANKHYA' })
export class TgvresEntity {
  @Column('int', { primary: true, name: 'NURES' })
  nures: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('int', { name: 'NUMCOTACAO', nullable: true })
  numcotacao: number | null;

  @Column('varchar', { name: 'RESPOSTA', length: 30 })
  resposta: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHRES', default: () => 'getdate()' })
  dhres: Date;

  @ManyToOne(() => TgvpergEntity, (tgvpergEntity) => tgvpergEntity.tgvres)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg: TgvpergEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgvres)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgvres)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
