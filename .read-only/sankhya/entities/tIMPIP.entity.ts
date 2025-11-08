import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimdtlEntity } from './tIMDTL.entity';
import { TimiviEntity } from './tIMIVI.entity';
import { TimimvEntity } from './tIMIMV.entity';
import { TimiptEntity } from './tIMIPT.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TimrcmEntity } from './tIMRCM.entity';

@Index('PK_TIMPIP', ['pipiptu', 'pipimovel', 'pipcodigo'], { unique: true })
@Entity('TIMPIP', { schema: 'SANKHYA' })
export class TimpipEntity {
  @Column('int', { primary: true, name: 'PIPIPTU' })
  pipiptu: number;

  @Column('int', { primary: true, name: 'PIPIMOVEL' })
  pipimovel: number;

  @Column('int', { primary: true, name: 'PIPCODIGO' })
  pipcodigo: number;

  @Column('float', { name: 'PIPVLRPARCELA', precision: 53 })
  pipvlrparcela: number;

  @Column('float', { name: 'PIPVLRPAGO', nullable: true, precision: 53 })
  pipvlrpago: number | null;

  @Column('float', { name: 'PIPVLRPAGOINQ', nullable: true, precision: 53 })
  pipvlrpagoinq: number | null;

  @Column('float', { name: 'PIPVLRPAGOPROP', nullable: true, precision: 53 })
  pipvlrpagoprop: number | null;

  @Column('datetime', { name: 'PIPDTINIPERIODO' })
  pipdtiniperiodo: Date;

  @Column('datetime', { name: 'PIPDTFINPERIODO' })
  pipdtfinperiodo: Date;

  @Column('char', { name: 'PIPPAGO', nullable: true, length: 1 })
  pippago: string | null;

  @Column('char', { name: 'PIPGEROUPARCELAS', nullable: true, length: 1 })
  pipgerouparcelas: string | null;

  @Column('datetime', { name: 'PIPDTJAPAGO', nullable: true })
  pipdtjapago: Date | null;

  @Column('varchar', { name: 'PIPINCORPAOVALOR', nullable: true, length: 1 })
  pipincorpaovalor: string | null;

  @Column('float', { name: 'PIPCOMISSAO', nullable: true, precision: 53 })
  pipcomissao: number | null;

  @OneToMany(() => TimdtlEntity, (timdtlEntity) => timdtlEntity.timpip)
  timdtls: TimdtlEntity[];

  @ManyToOne(() => TimiviEntity, (timiviEntity) => timiviEntity.timpips)
  @JoinColumn([
    { name: 'PIPIPTU', referencedColumnName: 'iviiptu' },
    { name: 'PIPIMOVEL', referencedColumnName: 'iviimovel' },
  ])
  timivi: TimiviEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timpips)
  @JoinColumn([{ name: 'PIPIMOVEL', referencedColumnName: 'imvcodigo' }])
  pipimovel2: TimimvEntity;

  @ManyToOne(() => TimiptEntity, (timiptEntity) => timiptEntity.timpips)
  @JoinColumn([{ name: 'PIPIPTU', referencedColumnName: 'iptcodigo' }])
  pipiptu2: TimiptEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.timpips)
  @JoinColumn([{ name: 'PIPFINDESP', referencedColumnName: 'nufin' }])
  pipfindesp: TgffinEntity;

  @OneToMany(() => TimrcmEntity, (timrcmEntity) => timrcmEntity.timpip)
  timrcms: TimrcmEntity[];
}
