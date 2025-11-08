import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcttEntity } from './tGFCTT.entity';
import { TimtlvEntity } from './tIMTLV.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMTNP', ['tnpcontrato', 'tnptransferencia', 'tnppessoa'], {
  unique: true,
})
@Entity('TIMTNP', { schema: 'SANKHYA' })
export class TimtnpEntity {
  @Column('int', { primary: true, name: 'TNPCONTRATO' })
  tnpcontrato: number;

  @Column('int', { primary: true, name: 'TNPTRANSFERENCIA' })
  tnptransferencia: number;

  @Column('int', { primary: true, name: 'TNPPESSOA' })
  tnppessoa: number;

  @Column('char', { name: 'TNPLEGADO', nullable: true, length: 1 })
  tnplegado: string | null;

  @Column('char', { name: 'TNPBOLETO', nullable: true, length: 1 })
  tnpboleto: string | null;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timtnps)
  @JoinColumn([
    { name: 'TNPPESSOA', referencedColumnName: 'codparc' },
    { name: 'TNPENDERECO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TimtlvEntity, (timtlvEntity) => timtlvEntity.timtnps)
  @JoinColumn([
    { name: 'TNPTRANSFERENCIA', referencedColumnName: 'tlvsequencia' },
    { name: 'TNPCONTRATO', referencedColumnName: 'tlvcontrato' },
  ])
  timtlv: TimtlvEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timtnps)
  @JoinColumn([{ name: 'TNPPROCURADOR', referencedColumnName: 'codparc' }])
  tnpprocurador: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timtnps2)
  @JoinColumn([{ name: 'TNPPESSOA', referencedColumnName: 'codparc' }])
  tnppessoa2: TgfparEntity;
}
