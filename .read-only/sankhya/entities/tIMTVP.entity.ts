import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcttEntity } from './tGFCTT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TimtlvEntity } from './tIMTLV.entity';

@Index('PK_TIMTVP', ['tvpcontrato', 'tvptransferencia', 'tvppessoa'], {
  unique: true,
})
@Entity('TIMTVP', { schema: 'SANKHYA' })
export class TimtvpEntity {
  @Column('int', { primary: true, name: 'TVPCONTRATO' })
  tvpcontrato: number;

  @Column('int', { primary: true, name: 'TVPTRANSFERENCIA' })
  tvptransferencia: number;

  @Column('int', { primary: true, name: 'TVPPESSOA' })
  tvppessoa: number;

  @Column('char', { name: 'TVPLEGADO', nullable: true, length: 1 })
  tvplegado: string | null;

  @ManyToOne(() => TgfcttEntity, (tgfcttEntity) => tgfcttEntity.timtvps)
  @JoinColumn([
    { name: 'TVPPESSOA', referencedColumnName: 'codparc' },
    { name: 'TVPENDERECO', referencedColumnName: 'codcontato' },
  ])
  tgfctt: TgfcttEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timtvps)
  @JoinColumn([{ name: 'TVPPROCURADOR', referencedColumnName: 'codparc' }])
  tvpprocurador: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timtvps2)
  @JoinColumn([{ name: 'TVPPESSOA', referencedColumnName: 'codparc' }])
  tvppessoa2: TgfparEntity;

  @ManyToOne(() => TimtlvEntity, (timtlvEntity) => timtlvEntity.timtvps)
  @JoinColumn([
    { name: 'TVPTRANSFERENCIA', referencedColumnName: 'tlvsequencia' },
    { name: 'TVPCONTRATO', referencedColumnName: 'tlvcontrato' },
  ])
  timtlv: TimtlvEntity;
}
