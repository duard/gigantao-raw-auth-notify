import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFCFRAST', ['codemp'], { unique: true })
@Entity('TGFCFRAST', { schema: 'SANKHYA' })
export class TgfcfrastEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', {
    name: 'PRIORIMP',
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  priorimp: string | null;

  @Column('varchar', {
    name: 'RASTESTVALIMP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  rastestvalimp: string | null;

  @Column('datetime', { name: 'DTMINGETENTRAST', nullable: true })
  dtmingetentrast: Date | null;

  @OneToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcfrast)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
